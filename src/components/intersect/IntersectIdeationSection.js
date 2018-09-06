import React from 'react';
import { Element } from 'react-scroll';
import GenericSubSection from '../section/part/GenericSubSection';
import IntersectIdeationCell from './IntersectIdeationCell';

export default () => {
    return (
        <div className="intersect-ideation marg-t-l">
            <Element name="intersect-ideation"><h2 className="section-header">&#45; Ideation &#45;</h2></Element>
            <GenericSubSection 
                title="1. Surveying for Customer Discovery"
                text="After conducting preliminary research about the payments market and formulating a grounded notion of the product I wanted to create, I decided to conduct customer discovery to get firsthand data from the local community; the survey I distributed via social media and mailing-lists yielded a total of 246 responses within an allotted 24-hour window. I've disclosed some of the results below."
            />
            <div className="intersect-ideation-image intersect-ideation-image--1"></div>
            <div className="intersect-ideation-image intersect-ideation-image--2"></div>
            <p className="section-text">From the survey results, I concluded the most important factors in mobile wallet product design to be security, speed, and convenience. As such, an effective mobile wallet needed to be <strong>hack-proof, performance-optimized, and usable everywhere</strong>. Of these three characteristics, I had conceptual control over convenience; security and speed were technical concerns. The question now was: How could I design a mobile wallet experience extensively, integrateable into everyones' daily lives?</p>
            <GenericSubSection 
                title="2. Formulating the Core"
                text="Having pinpointed key foci from the collected data, I proceeded to structure the application around the one factor I had full control over: convenience. I reasoned that for Intersect to be convenient, it had to possess multiple use-cases; the more scenarios there were in which one could use Intersect, the more predicted demand there would be for the product. As such, three pillars were born: physical payment, peer-to-peer money transfer, and online payment." 
            />
            <div className="intersect-grid">
                <IntersectIdeationCell
                    title="Physical Payment"
                    what="Customers can pay merchants through Intersect via the application’s secure and efficient QR code mechanism."
                    why="To use stored money to purchase goods and services from merchants." 
                />
                <IntersectIdeationCell
                    title="P2P Money Transfer"
                    what="Users can transfer money from one Intersect Wallet to another."
                    why="To transfer money to non-merchant friends and family." 
                />
                <IntersectIdeationCell
                    title="Online Payment"
                    what="Users can pay domestic utility bills including electricity, water, internet, etc."
                    why="To use stored money to pay in online portals." 
                />
            </div>
            <p className="section-text">Although I knew that a mobile wallet could possess additional features, I was convinced that the three aforementioned pillars were quintessential to laying a solid foundation for a complete user experience. After all, popular systems like Apple Pay and Venmo had already managed to deploy one pillar each; however, no one had successfully integrated all three.</p>
            <GenericSubSection 
                title="3. Defining the Logistics, Business Plan, and Features"
                text="Having researched the market thoroughly and analyzed the collected data, I proceeded to map out the high-level logistics of Intersect. What would be the role of Intersect in the financial ecosystem? How does Intersect's backend structure compare to that of other existing wallets? Is it unique enough? These were all complex questions that I had to address within a three-month period. I've included a few thought-processes below." 
            />
            <div className="intersect-ideation-image intersect-ideation-image--3"></div>
            <div className="intersect-ideation-image intersect-ideation-image--4"></div>
            <p className="section-text">Now that I had the general application structure down, I proceeded to develop a brief business plan. Ideas are great; but let's face it, they need financial backing for maintenance and expansion. The most obvious revenue stream to me was charging a commission on each transaction. Moving along, I reasoned that I could generate even more revenue by offering premium account options to both customers and merchants. In short, I could charge $5 for users to unlock additional useful features. What features? I discuss this in the next block.</p>
            <div className="intersect-ideation-image intersect-ideation-image--5"></div>
            <p className="section-text">Remember the Intersect core? That's physical payment, P2P money transfer, and online payment. Since I established a link between convenience and multifunctionality, I strongly believed that including smaller features (I nicknamed extensions) was necessary. Some possible extensions were data analytics (for customers and merchants), smart purchase logbook (for customers), and competitiveness reports (for merchants). The possibilities were infinite. At the end of the period, I had drafted two documents detailing logistics, business model, and product features: Intersect Architecture and Intersect Summary.</p>
            <Element name="intersect-wireframing"><GenericSubSection 
                title="4. Wireframing"
                text="The next step was to transfer the documented ideas into visuals. This step was split into three wireframe iterations, each version being an improved form of its predecessor; the wireframes were built on Affinity Designer (V1), Invision (V2), Adobe XD (V3). I considered this year-long commitment to be my first real introduction into the UI/UX side of product design as I had to make important decisions related to application-flow, design (e.g. color scheme, typography, etc.), and organization of specific on-screen elements." 
            /></Element>
            <p className="section-text">Iteration 1 (Affinity Designer):</p>
            <div className="intersect-ideation-image intersect-ideation-image--6"></div>
            <p className="section-text">Iteration 2 (Invision):</p>
            <div className="intersect-ideation-image intersect-ideation-image--7"></div>
            <p className="section-text">Iteration 3 (Adobe XD):</p>
            <div className="intersect-ideation-image intersect-ideation-image--8"></div>
            <p className="section-text">Before I showcase specific screens, I'd like to speak about a few noteworthy product design decisions I had to make.</p>
            <ul className="section-list">
                <li className="section-list-item"><strong>Home Screen</strong>: Since the beginning, I decided that Intersect's opening screen should be a map; this is contrary to what other mobile payment applications have setup. I made this decision after hypothesizing that a big problem why Apple Pay, Samsung Pay, etc. haven't gained traction is because users don't know which places accept the form of payment; therefore, they they are compelled to bring both their phone and wallet. However, if users knew ahead of time which places accepted mobile payment, they could confidently rely on their phones to be their true mobile wallet.</li>
                <li className="section-list-item"><strong>In-App Purchases</strong>: Realizing that each merchant experience is different, I decided to include in-app purchases to accomodate merchants who would appreciate the ability to sell prepaid products. This feature is important because it allows players like cinemas and amusement parks to sell tickets remotely; it also enables users to preorder products for pickup wherever applicable.</li>
                <li className="section-list-item"><strong>Two-Step Transaction Confirmation</strong>: I decided requiring PIN-code confirmation in addition to QR code for physical purchases was necessary to combat scamming. What if someone possessed a screenshotted copy of my QR code? How could I prevent them from using it to purchase goods and services? These questions prompted me to ensure maximum security for users.</li>
            </ul>
            <p className="section-text">These were few of many product design decisions I had to make. Next, I'd like to showcase and explain my design thoughts for the application's key screens. Below each screen, I elaborate on its component composition.</p>
            <p className="section-text">Home Screen:</p>
            <div className="intersect-ideation-image intersect-ideation-image--9">
                <p className="section-caption intersect-ideation-image--9-caption--1">Categories, Searchbar, Filters</p>
                <p className="section-caption intersect-ideation-image--9-caption--2">Map/List Segmented Control</p>
                <p className="section-caption intersect-ideation-image--9-caption--3">Merchant Map</p>
                <p className="section-caption intersect-ideation-image--9-caption--4">Feed, Home, Profile Navigation</p>
            </div>
            <p className="section-text">The Home Screen informs users which nearby merchants accept the mobile wallet as a valid form of payment. Users can search and apply filters to identify specific merchants; they can also discover what merchants have to offer.</p>
            <ul className="section-list">
                <li className="section-list-item"><strong>Categories, Searchbar, Filters</strong>: This collection of components allows users to easily identify their desired merchants. Users can sort by category (e.g food) or perform a direct name search. They can also apply filters (e.g. accept prepaid orders) to narrow down their search.</li>
                <li className="section-list-item"><strong>Map/List Segmented Control</strong>: These components allow users to view merchant data differently; each display style offers a unique benefit. While the default map view enables users to view merchants' geographic locations, the list view enables users to view merchants in a sorted fashion.</li>
                <li className="section-list-item"><strong>Merchant Map</strong>: This component is the display area containing either a map or list.</li>
                <li className="section-list-item"><strong>Feed, Home, Profile Navigation</strong>: This component allows users to navigate to the application's main screens.</li>
            </ul>            
            <p className="section-text">Profile Screen:</p>            
            <div className="section-caption intersect-ideation-image intersect-ideation-image--10">
                <p className="section-caption intersect-ideation-image--10-caption--1">QR Code, Username, Settings</p>
                <p className="section-caption intersect-ideation-image--10-caption--2">Profile Picture, Level</p>
                <p className="section-caption intersect-ideation-image--10-caption--3">Purchase History Tabs</p>
            </div>
            <p className="section-text">The Profile Screen informs users about their past purchase history; it also grants users access to their identification QR code and application settings. The QR code exists to enable customer-merchant payment.</p>
            <ul className="section-list">
                <li className="section-list-item"><strong>QR Code, Username, Settings</strong>: These components give users access to respective functions; this is self-explanatory.</li>
                <li className="section-list-item"><strong>Profile Picture, Level</strong>: This component informs users about their public image and application level or ranking. The ranking concept was introduced as a means of gamification to further engage users into maximizing application usage to accumulate redeemable points.</li>
                <li className="section-list-item"><strong>Purchase History Tabs</strong>: These components display details about users' transactions (e.g. merchant name, type of purchase, date of purchase, and purchase amount).</li>
            </ul>
            <p className="section-text">Feed Screen:</p>
            <div className="intersect-ideation-image intersect-ideation-image--11">
                <p className="section-caption intersect-ideation-image--11-caption--1">Prepaid Ticket Tabs</p>
                <p className="section-caption intersect-ideation-image--11-caption--2">Newly Joined Notifications</p>
            </div>
            <p className="section-text">The Feed Screen was introduced as a space to store current state. Wheareas the Profile Screen informs users about the past, the Feed Screen deals with the present. What prepaid tickets do I have to redeem? What are local merchants announcing? These are all questions that this screen attempts to answer.</p>
            <ul className="section-list">
                <li className="section-list-item"><strong>Prepaid Ticket Tabs</strong>: These components display current valid tickets for users' prepaid products. For example, they may inform users that they have purchased a movie ticket for a movie starting at 14:15; when users show up to the movie theatre, they can simply show the in-app ticket for entry. </li>
                <li className="section-list-item"><strong>Newly Joined Notifications</strong>: This component updates users about which nearby merchants have just started accepting Intersect as a valid form of payment.</li>
            </ul>
            <p className="section-text">This concludes the sample wireframe showcase. Feel free to contact me to learn or view more of this segment of my work!</p>
        </div>
    );
}
