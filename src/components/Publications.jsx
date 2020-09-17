import React from 'react'

export default ({ publicationLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Publications</h2>
              <h3 className="section-subheading text-muted">Authored By Dr. Eric Maass</h3>
            </div>
          </div>
          <div className="row">
            {
                publicationLinks && publicationLinks.map(({ image, title, caption, link }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <a href={ link }><i className="fa fa-plus fa-3x"></i></a>
                                </div>
                            </div>
                            <img className="img-fluid" src={ image } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}