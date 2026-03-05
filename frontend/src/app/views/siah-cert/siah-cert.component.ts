import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterColumn, FooterComponent } from '../../shared/components/footer/footer.component';
import { EmailCtaComponent } from '../../shared/components/email-cta/email-cta.component';

@Component({
  selector: 'app-siah-cert',
  standalone: true,
  imports: [],
  templateUrl: './siah-cert.component.html',
  styleUrls: ['./siah-cert.component.scss']
})

export class SiahCertComponent implements AfterViewInit {
  footerColumns: FooterColumn[] = [
    { title: 'Certificados', links: [{ label: 'e-CPF A1' }, { label: 'e-CPF A3' }, { label: 'e-CNPJ A1' }, { label: 'e-CNPJ A3' }] },
    { title: 'Serviços', links: [{ label: 'Assinatura Digital' }, { label: 'NF-e e NFS-e' }, { label: 'Validação por Vídeo' }] },
    { title: 'Empresa', links: [{ label: 'Sobre a SIAH', route: '/sobre' }] },
    { title: 'Contato', links: [{ label: '(92) 99394-6188', href: 'https://wa.me/5592993946188' }] }
  ];
  cards = [{ 'bg': 'linear-gradient(135deg,#7c3aed,#a855f7)', 'icon': 'fas fa-certificate', 'title': 'Adquira Já!', 'sub': 'Certificado Digital' }, { 'bg': 'linear-gradient(135deg,#3b1999,#7c3aed)', 'icon': 'fas fa-user-shield', 'title': 'Conte com a gente!', 'sub': 'Solicite já' }, { 'bg': 'linear-gradient(135deg,#00b37e,#00c896)', 'icon': 'fab fa-whatsapp', 'title': 'Chama no zap!', 'sub': '(92) 99394-6188' }, { 'bg': 'linear-gradient(135deg,#00b37e,#22c55e)', 'icon': 'fas fa-mobile-alt', 'title': 'Certificado Digital?', 'sub': 'Entre em contato conosco' }];
  tipos = [{ 'icon': 'fas fa-cloud', 'label': 'e-CPF A1', 'desc': 'Arquivo digital, validade 1 ano' }, { 'icon': 'fas fa-usb', 'label': 'e-CPF A3', 'desc': 'Token ou cartão, até 3 anos' }, { 'icon': 'fas fa-building', 'label': 'e-CNPJ A1', 'desc': 'Para emissão de NF-e, 1 ano' }, { 'icon': 'fas fa-id-card', 'label': 'e-CNPJ A3', 'desc': 'Token ou cartão, até 3 anos' }];
  ngAfterViewInit(): void { const o = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible') }); }, { threshold: .1 }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); }
}
