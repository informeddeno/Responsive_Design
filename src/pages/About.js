import React from "react";
import Card from "../components/Card";

const About = () => (
  <main className="flex-1 p-6 bg-gray-100">
    <h1 className="text-center text-3xl font-bold text-primary mb-6">
	Welcome! We offer e-bike conversion services.
    </h1>
    <p className="text-center text-gray-700 mb-10">
	We source for you bikes, hub and drive-motors directly from manufactures internationally on your behalf at competitive prices.
    </p>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Shopping for bikes and kits"
        description="We take note of your requirements and ship in the parts that suit your customization directly from our international original equipment manufacturers on your behalf"
    image="https://img.freepik.com/free-photo/mechanic-examining-bicycles_1170-2369.jpg?uid=R201118973&ga=GA1.1.1372238407.1747751594&semt=ais_hybrid&w=740"
    />
	<Card
        title="Assembly and fitting of e-bike Conversion Kit onto bike"
        description="Our team of experienced bike mechanics fit the e-bike kit onto your bike."
        image="https://img.freepik.com/free-photo/young-active-female-cyclist-taking-screwdriver-turning-screws-servicing-bicycle-parts-sporty-enthusiastic-african-american-woman-holding-professional-tool-bike-maintenance_482257-70195.jpg?uid=R201118973&ga=GA1.1.1372238407.1747751594&semt=ais_hybrid&w=740"
      />
      <Card
        title="Excellent customer care and after-sales service"
        description="Our experienced customer care and service team will ensure an enjoyable experience as they walk with you from purchase of the kits to after-sales service."
    image="https://img.freepik.com/free-photo/woman-talking-phone-with-technician-asking-help-fixe g-defective-bike_482257-101140.jpg?uid=R201118973&ga=GA1.1.1372238407.1747751594&semt=ais_hybrid&w=740"
      />
	</section>
	 <section>
        <center>
            <div class="card11">
                <div class="card11a">
                    <p>NEED HELP?</p>
                    <h1>Frequently <br />Asked Questions</h1>
                </div>

                <div class="card11b">
                    <div class="card11b1">
                        <p>
                            Find answers to common questions about<br />
                            buying and fitting an e-bike conversion kit.
                        </p>
                        <img src="https://img.freepik.com/free-photo/medium-shot-colleagues-with-bicycle_23-2149413682.jpg?uid=R201118973&ga=GA1.1.1372238407.1747751594&semt=ais_hybrid&w=740" alt="Help and support"/>
                    </div>

                    <div class="faq-container">
                        <details>
                            <summary>Do I need any experience to start?</summary>
        <div class="faq-content">Nope! This site and it's conversion kits are beginner-friendly and starts from scratch to accomodate DIY enthusiasts.</div>
                        </details>
                        <details>
                            <summary>How long does it take to have a conversion done?</summary>
                            <div class="faq-content">You can have it in ~two weeks, one and a half weeks for shipping and 3 days for fitting.</div>
                        </details>
                        <details>
                            <summary>How much does it cost?</summary>
                            <div class="faq-content">hub drive -USD.600-1000, mid-drive -USD.1200-2000.</div>
                        </details>
                        <details>
                            <summary>Are the kits available locally at your store?</summary>
                            <div class="faq-content">Not yet, we are a fully online startup that orders kits on on behalf on demand by the client in order to keep over-head costs low in order to offer you competitive prices. We assemble the kits at approved bike shops.                       </div>
                        </details> 
                        <details>
                            <summary>Do I get a certificate to confirm my ownership?</summary>
                            <div class="faq-content">Yes, the kits are imported in your name and the reciepts and customs documents are in your names.</div>
                      </details>
                        <details>
                            <summary>Where can I ask questions or get support?</summary>
                            <div class="faq-content">You can reach out via the contact page.</div>
                        </details>
                    </div>
                </div>
            </div>
        </center>
    </section>
  </main>
);

export default About;
