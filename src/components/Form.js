import React from 'react'

export default function Form() {
    return (
        <div>
             <div class="row">
                    <div class="col">
                        <div className="row gx-5">
                            <div className="">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row gx-5">
                            <div class="">
                                <label for="lname">Last Name</label>
                            </div>
                            <div class="">
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row gx-5">
                            <div class="">
                                <label for="country">Country</label>
                            </div>
                            <div class="">
                                <select id="country" name="country">
                                    <option value="india">India</option>
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row gx-5">
                            <div class="">
                                <label for="subject">Subject</label>
                            </div>
                            <div class="">
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
                {/* Form ends Here */}
            
        </div>
    )
}
