import React, { useState } from 'react';
import patrsLanding from '../../assets/designs/PATRS_LANDING.png';
import patrsObjectives from '../../assets/designs/PATRS_OBJECTIVES.png';
import patrsObjectivesComments from '../../assets/designs/PATRS_OBJECTIVES_COMMENTS.png';
import Modal from '../../components/Modal.js';

function PATRS() {
    const [ showModal, setShowModal ] = useState(false);
    const [ imgSrc, setImgSrc ] = useState(null);
    const [ alt, setAlt ] = useState(null);

    const setModalProps = (showModal, imgSrc, alt) => {
      setShowModal(showModal);
      setImgSrc(imgSrc);
      setAlt(alt);
    };

    return (
      <>
        <Modal
          isOpen={showModal}
          onClose={setShowModal}
        >
          <img src={imgSrc} alt={alt} />
        </Modal>
        <section className="patrs-container">
          <h1 className="content-header">Performance and Talent Review - Redesign</h1>
          <section className="content-section">
            <h5 className="content-label">Overview</h5>
            <div className="content-copy-wrapper">
              <p className="content-copy">
                  The Performance and Talent Review System was first released in the fall of 2018. Our team consolidated Liberty Mutual’s 
                  performance review process that spanned over four disjointed applications and systems into one seamless experience. The 
                  team received an IT Excellence Award for these development efforts.
                  <br />
                  <br />
                  Since then, the application has matured greatly and includes a lot of complex business logic. While the experience remains 
                  intuitive, there are certainly areas in which I think the design could be revisited and improved upon. 
                  <br />
                  <br />
                  I took a few days during our team’s innovation sprint to think about a potential redesign for a few pages within the 
                  application. My first step was to reach out to our business stakeholder to get a better understanding of her future vision 
                  for performance at Liberty. 
              </p>
            </div>
          </section>
          <div className="content-divider"></div>
          <section className="content-section">
            <h5 className="content-label">Designs</h5>
            <div className="content-copy-wrapper">
              <p className="content-copy">
              While working on the landing page, I wanted to highlight Liberty’s Diversity Equity and Inclusion guidelines as the 
              company has made great progress in this regard. Highlighting specific articles and resources for Liberty’s performance 
              philosophy was another key ingredient to the redesign of the landing page to ensure managers had a collective understanding 
              of how the performance process should work. Implementing the Liberty Mutual Design System components in these redesigns is 
              another important factor to call out. These components meet a high standard of accessibility requirements which is a standard 
              across application development. The LMDS also allows our development squad to sleep easy at night, knowing that our application 
              is less reliant on third party component libraries.
              </p>
              <img 
                src={patrsLanding} 
                alt="performance and talent landing page"
                role="button"
                tabIndex={0}
                onClick={
                  () => setModalProps(
                      true, 
                      patrsLanding,
                      "performance and talent landing page"
                    )
                }
                onKeyPress={
                  () => setModalProps(
                      true, 
                      patrsLanding,
                      "performance and talent landing page"
                    )
                }
              />
              <p className="content-copy">
              The first action a manager takes when starting a performance review for an employee is usually to evaluate their objectives. 
              The goal here was to minimize the noise on the screen. While there is a lot of pertinent information, reorganizing it in a 
              digestible way was the first step I took by placing helpful resources to the left rather than hiding them in the navigation header. 
              Other updates included adding more white space around elements and taking away some data points from the employee details section 
              to mitigate any bias a manager may have from previous performance years. Once again, I leveraged the LMDS for many of these updates. 
              </p>
              <img src={patrsObjectives} alt="performance and talent objectives page"/>
              <img src={patrsObjectivesComments} alt="performance and talent objectives comments expanded page"/>
            </div>
          </section>
        </section>
      </>
    );
  }
  
export default PATRS;