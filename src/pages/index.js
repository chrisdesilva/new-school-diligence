import React, { useState } from "react"
import SEO from "../components/seo"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const IndexPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    state: "",
    address: "",
    existence: "",
    founder: "",
    bankruptcies: "",
    financial: "",
    license: "",
    pending: "",
    online: "",
    noreg: "",
    socials: "",
    graduates: "",
    employerrelationships: "",
    topemployers: "",
    partnerorgs: "",
    firstname: false,
    lastname: false,
    title: false,
    email: false,
    phonenumber: false,
  })

  const handleChange = e => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => {
        setFormState({
          name: "",
          state: "",
          address: "",
          existence: "",
          founder: "",
          bankruptcies: "",
          financial: "",
          license: "",
          pending: "",
          online: "",
          noreg: "",
          socials: "",
          graduates: "",
          employerrelationships: "",
          topemployers: "",
          partnerorgs: "",
          firstname: false,
          lastname: false,
          title: false,
          email: false,
          phonenumber: false,
        })
      })
      .catch(error => alert(error))
  }

  return (
    <div>
      <SEO title="New School Diligence" />
      <form
        name="new-school-diligence"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="text" name="state" />
        <textarea name="address" />
        <input type="text" name="existence" />
        <textarea name="founder" />
        <textarea name="bankruptcies" />
        <input type="text" name="financial" />
        <input type="file" name="license" />
        <input type="file" name="pending" />
        <input type="file" name="online" />
        <textarea name="noreg" />
        <textarea name="socials" />
        <input type="text" name="graduates" />
        <input type="text" name="employerrelationships" />
        <input type="text" name="topemployers" />
        <input type="text" name="partnerorgs" />
        <input type="checkbox" name="firstname" />
        <input type="checkbox" name="lastname" />
        <input type="checkbox" name="title" />
        <input type="checkbox" name="email" />
        <input type="checkbox" name="phonenumber" />
      </form>

      <form
        name="new-school-diligence"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="new-school-diligence" />
        <p>What is your legal entity name?</p>
        <input
          onChange={handleChange}
          value={formState.name}
          name="name"
          type="text"
          required
        />
        <p>What is your legal state of organization?</p>
        <input
          onChange={handleChange}
          value={formState.state}
          name="state"
          type="text"
          required
        />
        <p>What is the address of your headquarters?</p>
        <textarea
          onChange={handleChange}
          value={formState.address}
          name="address"
          required
        />
        <p>How long has your school been in existence (in years)?</p>
        <input
          onChange={handleChange}
          value={formState.existence}
          name="existence"
          type="text"
          required
        />
        <p>
          Please provide the names of each founder and executive along with a
          LinkedIn profile link.
        </p>
        <textarea
          onChange={handleChange}
          value={formState.founder}
          name="founder"
          required
        />
        <p>
          Please describe any bankruptcies, regulatory enforcement actions and
          former or pending litigation by or against: (1) the school or (2) the
          leadership team.
        </p>
        <textarea
          onChange={handleChange}
          value={formState.bankruptcies}
          name="bankruptcies"
          required
        />
        <p>
          Based on your working capital needs and operational costs, are you
          able to meet current and future financial obligations (rent, salaries,
          marketing, etc.) for the next 12 months?
        </p>
        <input
          onChange={handleChange}
          value={formState.financial}
          name="financial"
          type="text"
          required
        />
        <p>
          Please provide a copy of your license or state approval for all states
          in which you operate at which students receiving Skills Fund financing
          may attend. You may upload multiple files.
        </p>
        <input
          onChange={handleChange}
          value={formState.license}
          name="license"
          type="file"
          required
        />
      </form>
    </div>
  )
}

export default IndexPage
