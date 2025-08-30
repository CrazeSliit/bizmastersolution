
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                <span className="text-primary text-sm font-medium">Trusted Business Consultant</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Accelerate Growth.{" "}
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Unlock Clarity.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                We partner with ambitious teams to turn complexity into measurable growth through innovative business solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                  Book a Consultation
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button className="border-2 border-border text-foreground hover:bg-accent px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  View Work
                </button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections can be added here */}
        <section id="about" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">About Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive business solutions help companies streamline operations, 
              increase efficiency, and achieve sustainable growth in today&apos;s competitive market.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
