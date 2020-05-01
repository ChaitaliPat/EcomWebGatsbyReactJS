import React from 'react'
import HeadingText from '../reusable/HeadingText'


export default function DualInfoBlock({heading,hrefheading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <HeadingText headertext={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                    <div className="col-4 mx-auto">
                    <div class="card bg-dark">
  <img class="card-img-top" src="https://images.pexels.com/photos/1115828/pexels-photo-1115828.jpeg?cs=srgb&dl=horse-horseman-horses-1115828.jpg&fm=jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-success">Chaitali Patil</h5>
    <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-warning btn-block">{hrefheading}</a>
  </div>
</div>
                    </div>
                </div>                
            </div>
        </section>
    )
}
