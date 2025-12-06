import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Users, Calendar, FileText, ArrowRight } from 'lucide-react';

export default function Index() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard');
    }
  }, [user, isLoading, navigate]);

  const features = [
    {
      icon: Users,
      title: 'Gestão de Pacientes',
      description: 'Cadastro completo com validação de CPF e dados pessoais protegidos.',
    },
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Sistema de consultas vinculando pacientes e médicos com controle de status.',
    },
    {
      icon: FileText,
      title: 'Prontuário Eletrônico',
      description: 'Registro de histórico médico e prescrições de forma segura.',
    },
    {
      icon: Shield,
      title: 'Auditoria LGPD',
      description: 'Logs completos de todas as operações para compliance.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
              <div className="p-3 rounded-xl bg-primary/20">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-sidebar-foreground">
                VidaPlus
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-sidebar-foreground mb-4 animate-slide-up">
              Sistema de Gestão Hospitalar e de Serviços de Saúde
            </h2>
            <p className="text-lg text-sidebar-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Plataforma integrada para gestão de pacientes, agendamentos e prontuários 
              eletrônicos com segurança e compliance LGPD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/auth')}
              >
                Acessar Sistema
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Funcionalidades Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-card-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">SGHSS - VidaPlus</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Sistema desenvolvido com foco em arquitetura backend robusta, 
            segurança de dados e fluxos de negócio claros para a área de saúde.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Compliance LGPD
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Multi-perfil
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 VidaPlus - Sistema de Gestão Hospitalar</p>
        </div>
      </footer>
    </div>
  );
}
