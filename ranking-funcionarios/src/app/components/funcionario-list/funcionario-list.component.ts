import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario.model';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  criterioOrdenacao = 'nome';


  

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.criterioOrdenacao = 'pontos'; // ordenação padrão
    this.getFuncionarios();
  }

  getFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      (data) => {
        console.log('Funcionários recebidos:', data);
        this.funcionarios = data;
        this.ordenarFuncionarios();
        
      },
      (error) => {
        console.error('Erro ao buscar funcionários:', error);
      }
    );
  }

  ordenarFuncionarios(): void {
    this.funcionarios.sort((a, b) => {
      if (this.criterioOrdenacao === 'nome') {
        return a.nome.localeCompare(b.nome);
      } else if (this.criterioOrdenacao === 'pontos') {
        return b.pontos - a.pontos;
      } else if (this.criterioOrdenacao === 'meta') {
        const metaA = parseInt(a.meta.match(/\d+/)?.[0] || '0', 10);
        const metaB = parseInt(b.meta.match(/\d+/)?.[0] || '0', 10);
        return metaB - metaA;
      }
      return 0;
    });
  }


  getProgresso(funcionario: Funcionario): number {
    const meta = typeof funcionario.meta === 'string' ? parseInt(funcionario.meta.match(/\d+/)?.[0] || '0', 10) : funcionario.meta;
    const pontos = funcionario.pontos || 0;
    return Math.min(100, Math.round((pontos / meta) * 100));
  }

  exportarPDF(): void {
    const doc = new jsPDF();
    doc.text('Ranking de Funcionários', 14, 10);
    autoTable(doc, {
      head: [['Nome', 'Pontos', 'Meta']],
      body: this.funcionarios.map(f => [f.nome, f.pontos, f.meta]),
    });
    doc.save('ranking-funcionarios.pdf');
  }

  exportarCSV(): void {
    const csvRows = [
      ['Nome', 'Pontos', 'Meta'],
      ...this.funcionarios.map(f => [f.nome, f.pontos.toString(), f.meta])
    ];
    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'ranking-funcionarios.csv');
  }






}
