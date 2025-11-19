'use client';

import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

export function LocalBusinessSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Serving Brandon, Tampa & Surrounding Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in Brandon Centre South, Skin by Emely LLC proudly serves Brandon, Tampa, Riverview, Valrico, Seffner, and the surrounding Florida communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">
              1941 W Lumsden Rd<br />
              Suite 111<br />
              Brandon, FL 33511
            </p>
          </Card>

          <Card className="p-6">
            <Phone className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">
              <a href="tel:(914)299-7739" className="hover:text-primary transition">
                (914) 299-7739
              </a>
              <br />
              Call to book or inquire
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-sm text-muted-foreground">
              Tue–Thu: 10:30 AM–8 PM<br />
              Fri: 10 AM–8 PM<br />
              Sat–Sun: 9 AM–3 PM<br />
              Closed Mondays
            </p>
          </Card>

          <Card className="p-6">
            <Award className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Credentials</h3>
            <p className="text-sm text-muted-foreground">
              Licensed Esthetician<br />
              4+ Years Experience<br />
              2-Year Business Owner<br />
              5.0 Stars (135 Reviews)
            </p>
          </Card>
        </div>

        {/* Service Areas */}
        <div className="mt-12 bg-background rounded-lg p-8 border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Brandon', 'Tampa', 'Riverview', 'Valrico', 'Seffner', 'Apollo Beach', 'Lithia', 'Ruskin'].map((area) => (
              <div key={area} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
