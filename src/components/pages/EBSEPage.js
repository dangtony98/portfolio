import React, { Component } from 'react';
import EBSEOpenerSection from '../ebse/EBSEOpenerSection';
import GenericSection from '../section/part/GenericSection';
import GenericSubSection from '../section/part/GenericSubSection';
import Footer from '../footer/Footer';

export default class EBSEPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <EBSEOpenerSection />
                <GenericSection 
                    title="&#45; Background &#45;" 
                    text={["Equipped with knowledge of Python and Objective-C, I committed myself to learning web development in Summer 2018. Within the three-month period, I learned multiple languages, libraries, and technologies including HTML, CSS, SaSS, JS, jQuery, JSX, React, Redux, NodeJS, MongoDB. While I covered the MERN Stack, I focused on developing expertise in the frontend portion, being React/Redux. To accomplish this, I built a series of web applications including a news-fetcher and messenger application. EBSE was by far my most complex frontend project."]}
                    sectionName="ebse-background"
                />
                
                <GenericSection 
                    title="&#45; Toolbox &#45;" 
                    text={["React / React Router / React Form / React Collapse / React Select / React Slick / Faker / UUID / SaSS / Redux / NodeJS / Express / MongoDB / Webpack / Babel."]}
                    sectionName="ebse-toolbox"
                />

                <GenericSection 
                    title="&#45; Goal &#45;" 
                    text={["Having covered much theory, I put my skills to practice by challenging myself to build the frontend of an ecommerce website called Everybody Buy and Sell Everything (EBSE) with React; state management would be handled by Redux. I aimed to complete the three main pages (Home Page, Search Page, Product Page) and a Login/Signup Page within a week."]}
                    sectionName="ebse-goal"
                />
                <GenericSection 
                    title="&#45; Development &#45;" 
                    text={["In this segment, I discuss my experience designing EBSE's frontend including the UI/UX thought processes and technical nuances encountered during implementation. Since my objective was to see how far I could go with my knowledge of React-Redux, I focused on functionality and code-optimization; as a product designer, however, I still had to ensure a quality interactive and visual experience."]}
                    sectionName="ebse-development"
                />
                <GenericSubSection
                    title="1. Setting up the Application"
                    text="Instead of using Create-React-App to kickstart the project, I decided to create my own Webpack and Babel configuration for fine-grained control over the project. In my webpack.config.js and .babelrc files, I defined entry, output, loaders (babel-loader, css-loader, sass-loader) and presets/plugins respectively."
                />
                <p className="section-text">Next, I identified the toolbox I needed to create EBSE. To store product and shopping cart states, I needed a state management library like Redux. For client-side routing, I needed React Router. The rest of the toolbox was gradually formed by the component requirements of the project (e.g. Redux Form for input fields).</p>
                <GenericSubSection
                    title="2. Creating the Home Page"
                    text="The EBSE Home Page was designed to showcase the marketplace's products in an informative and welcoming manner. While creating this page, I focused on delivering an AirBnB-inspired look and feel whilst keeping practicality in mind; as a product designer, I wanted to ensure solid UI/UX. Logical navigation accompanied by stylistic choices like color-gradients and box-shadows all helped to accomplish this task. I started by creating a universal searchbar followed by an informative carousel-based jumbotron. The latter would be a space to inform users that this marketplace supported all buyers and sellers and not only manufacturers."
                />
                <p className="section-text">Home Page</p>
                <div className="ebse-development-image ebse-development-image--1">
                    <p className="section-caption ebse-development-image--1-caption--1">Searchbar, Sign In, Categories</p>
                    <p className="section-caption ebse-development-image--1-caption--2">Jumbotron Carousel</p>
                    <p className="section-caption ebse-development-image--1-caption--3">Category Carousel</p>
                    <p className="section-caption ebse-development-image--1-caption--4">Shopping Cart</p>
                    <p className="section-caption ebse-development-image--1-caption--5">Product Carousel</p>
                    <p className="section-caption ebse-development-image--1-caption--6">Categories Grid</p>
                    <p className="section-caption ebse-development-image--1-caption--7">Footer</p>
                </div>
                <p className="section-text">Creating the Home Page had its own nuances. I describe a few component creation-processes below:</p>
                <ul className="section-list">
                    <li className="section-list-item"><strong>Searchbar</strong>: This standard component was developed to facilitate product searches. Although the component was fairly simple to construct, it had a few technical nuances including code reusability optimization and controlled input setup. The latter was a learned React best-practice principle involving passing in display-values to the input field from application state. By following this principle, I hoped to maximize information control and accessability throughout the platform; for example, it would later on help the Search Page know what products to retrieve.</li>
                    <li className="section-list-item"><strong>Shopping Cart</strong>: This component was developed with the intent of enhancing UX. I reasoned that an ecommerce experience with a real-time, viewable shopping cart as opposed to traditional navigation to a new page was superior. To implement this feature, I set up a reducer to store the shopping cart's contents and handle UUID-referenced cart changes (increment, decrement, and remove); I also attached appropriate action generators to buttons to trigger respective cart changes.</li>
                    <li className="section-list-item"><strong>Product Carousel</strong>: Realizing that I needed a flexible product tab carousel to showcase items, I looked to React-Slick to set up a foundation. Combined with my custom React-Redux product tabs, I designed a flexible carousel that could adapt to various screen sizes via breakpoint detection and update shopping cart state.</li>
                </ul>
                <GenericSubSection
                    title="3. Creating the Search Page"
                    text="The Search Page enabled users to view product options matching search and filter specifications. While I drew inspiration from multiple ecommerce websites, I added my own twist to the UI/UX by implementing an advanced drop-down filter and a hover-triggered, product-perspective effect. On a technical note, I had to create a custom algorithm to take into account multiple product filter and sort options at once (e.g. keyword filter with price and date sort) and return revised product lists."
                />
                <p className="section-text">Search Page</p>
                <div className="ebse-development-image ebse-development-image--2">
                    <p className="section-caption ebse-development-image--2-caption--1">Filters</p>
                    <p className="section-caption ebse-development-image--2-caption--2">Search Results</p>
                </div>
                <p className="section-text">Although the Search Page was, in many aspects, similar to the Home Page, it presented two technical challenges: creating a functional, drop-down filter feature and a more-elaborate template for product tabs. I elaborate on these components below:</p>
                <ul className="section-list">
                    <li className="section-list-item"><strong>Filters</strong>: This component was complicated because it involved both mechanic and logical implementations; here, React Collapse and React Select helped me animate the dropdown effect and deliver a modern select-element experience respectively. The goal behind the drop-down filter was to fit all filter options into one space and give users the ability to minify the drop-down whilst still being aware of all the active filters. To deliver the drop-down effect, I stored the collective active-filter state using Redux; I then displayed active-filters beside the drop-down trigger. React Select was used for stylistic purposes only. I've included a GIF below to illustrate the website's filtering mechanism.</li>
                    <li className="section-list-item"><strong>Search Results</strong>: The hardest part about programming this component was creating the algorithm to correctly order products based on active filters managed by Redux. Although my solution was long (~50 lines) and utilized many switch statements and built-in, sort methods, it proved to be successful. A note about the template architecture: to distinguish the search-result, product tabs from the carousel product tabs, I increased tab size and added the ability to view multiple product angles upon hover. To accomplish the latter, I added a 'current-image' attribute to each tab's state; upon hover detection, I would change the 'current-image' attribute to a new reference and thus trigger a component rerender.</li>
                </ul>
                <GenericSubSection
                    title="4. Creating the Product Page"
                    text="The Product Page was by far the most difficult page to create because component reusability was minimal and I needed to find a solution for custom products; after all, products come in different forms, sizes, colors, etc. In essence, I constructed an information-injectable template compatible with products containing custom attributes; the template required that a specific, hierarchical JSON string containing all relevant product and customization details be passed in for functional display."
                />
                <p className="section-text">Product Page</p>
                <div className="ebse-development-image ebse-development-image--3">
                    <p className="section-caption ebse-development-image--3-caption--1">Product Image Perspectives</p>
                    <p className="section-caption ebse-development-image--3-caption--2">Customization</p>
                </div>
                <p className="section-text">I elaborate on two complexities of this page below:</p>
                <ul className="section-list">
                    <li className="section-list-item"><strong>Product Image Perspectives</strong>: Implementing this feature was almost identical to creating the product tabs in the Search Page. I set up a state attribute to store the current, showcased image; the attribute would update upon any hover-trigger tied to the other side images.</li>
                    <li className="section-list-item"><strong>Customization</strong>: To render customization options, I set up a loop to render React components with listeners. Behind the scenes, to enable product customization, I duplicated the product JSON and injected custom, selected attributes into the new copy after checking that all required fields were selected.</li>
                </ul>
                <GenericSection 
                    title="&#45; What I Learned &#45;" 
                    text={["Creating a full-fledged, ecommerce frontend was a daunting task which taught me many valuable technical lessons. I outline a number of these below:"]}
                    sectionName="ebse-learned"
                />
                <ul className="section-list">
                    <li className="section-list-item"><strong>Ignore Short-Term Solutions</strong>: When designing the shopping cart algorithm, I XYZ.</li>
                    <li className="section-list-item"><strong>Optimize for Reusability</strong>: When designing the shopping cart algorithm, I XYZ.</li>
                    <li className="section-list-item"><strong>Take Advantage of NPM</strong>: When I first started building EBSE, I thought that I'd; little did I know that a myriad of sound, open-source components existed.</li>
                </ul>
                <Footer />
            </div>
        );
    }
}
