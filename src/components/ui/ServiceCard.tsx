import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Building2, 
  BarChart3, 
  Heart, 
  Briefcase, 
  Globe, 
  Palette, 
  Zap, 
  Users, 
  ShieldCheck, 
  Layers, 
  ScrollText, 
  Plane 
} from 'lucide-react';
import styles from './ServiceCard.module.scss';

const iconMap: Record<string, any> = {
  Building2,
  BarChart3,
  Heart,
  Briefcase,
  Globe,
  Palette,
  Zap,
  Users,
  ShieldCheck,
  Layers,
  ScrollText,
  Plane
};

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
  category?: string;
  ctaText?: string;
  className?: string;
}

export function ServiceCard({ title, description, slug, iconName, ctaText, className }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Briefcase;

  return (
    <Link href={`/our-capabilities/${slug}`} className={`${styles.serviceCard} ${className || ""}`}>
      <div className={styles.iconWrapper}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.footer}>
        {ctaText && <span className={styles.ctaLabel}>{ctaText}</span>}
        <ArrowRight className={styles.arrow} size={24} />
      </div>
    </Link>
  );
}
