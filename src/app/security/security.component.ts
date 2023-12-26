import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  card:any[]=[
    {
      icon:'fa-brands fa-aws',
      tittle:'Physical Security',
      text:"ContractHub data centers (handled by Amazon AWS) are state of the art, utilizing innovative architectural and engineering approaches. Amazon has many years of experience in designing, constructing, and operating large-scale data centers. This experience has been applied to the AWS platform and infrastructure."
    },
    {
      icon:'fa-solid fa-server',
      tittle:'Physical Security',
      text:"ContractHub data centers (handled by Amazon AWS) are state of the art, utilizing innovative architectural and engineering approaches. Amazon has many years of experience in designing, constructing, and operating large-scale data centers. This experience has been applied to the AWS platform and infrastructure."
    },
    {
      icon:'fa-solid fa-virus',
      tittle:'Vulnerability testing',
      text:"Web application security is evaluated by the development team in sync with the application release cycle. This vulnerability testing includes the use of commonly known web application security toolkits and scanners to identify application vulnerabilities before they are released into production."
    },
    {
      icon:'fa-solid fa-copy',
      tittle:'Backups',
      text:'ContractHub runs full daily automated backups of our databases and all user documents. All backups are encrypted and stored independently across 2 regions (1) America (2) Australia and further auto-replicated within each region by AWS to provide resiliency This guarantees maximum protection and independence between layers.'
    },
    {
      icon:'fa-regular fa-asterisk',
      tittle:'Encryption',
      text:'Each and every transaction happening on the ContractHub platform is processed by a closely monitored server infrastructure and encrypted using industry-standard 256-bit HTTPS Encryption.'
    },
    {
      icon:'fa-regular fa-eye',
      tittle:'System Monitoring',
      text:'At ContractHub, the production application and underlying  the production application and underlying infrastructure components are monitored 24/7/365 days a year.'
    },
    {
      icon:'fa-solid fa-server',
      tittle:'Application architecture',
      text:'The ContractHub web application is multi-tiered into logical segments (front-end, API, and database), each independently separated from each other in a DMZ configuration. This guarantees maximum protection and independence between layers'
      
    },
    {
      icon:'fa-regular fa-eye-slash',
      tittle:'Passwords & Tokens',
      text:'Passwords and verification tokens are stored encrypted using modern and state-of-the-art solutions including the bcrypt key derivation function. We don’t store plain data but use cryptographic one-way hash functions.'
    },
    {
      icon:'fa-regular fa-file-shield',
      tittle:'Secured Documents',
      text:'Contracts can only be viewed through the website using a verified account or using a unique key that is embedded within the recipient’s email link.'
    },
    {
      icon:'fa-solid fa-server',
      tittle:'Sessions',
      text:"Session data is remembered on the client-side and the server-side which improves security server-side which improves security  in case of any malicious operations."
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
 
  }

}
