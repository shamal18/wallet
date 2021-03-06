/*Footer code start*/
export default function Footer(props) {
    return (
        <>

            {/* Footer start Here */}
            <footer id="sticky-footer" classNameName="flex-shrink-0 py-4 bg-dark text-secondary-50">
                <div className="container py-4 bg-info">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">FB.</h5>
                            <p className="small text-muted">{props.tagLine}</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">{props.name}</a></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className={`btn btn-outline-${props.btn}`} type="submit">Submit</button>
                                  {/* Here button prob is used */} 
                            
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Ends Here */}
        </>

    )
}