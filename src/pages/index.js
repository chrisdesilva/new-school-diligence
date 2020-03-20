import React, { useState, useCallback } from "react"
import SEO from "../components/seo"
import { useDropzone } from "react-dropzone"

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

  // const onDrop = useCallback(acceptedFiles => {
  //   setFormState({
  //     ...formState,
  //     license: acceptedFiles[0],
  //     pending: acceptedFiles[1],
  //   })
  // }, [])
  // const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const encode = data => {
    const formData = new FormData()
    Object.keys(data).forEach(k => {
      formData.append(k, data[k])
    })
    return formData
  }

  const handleChange = e => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleAttachment = e => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": "multipart/form-data" },
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
          additionalAddress: "",
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
        encType="multipart/form-data"
        hidden
      >
        <input type="text" name="name" />
        <input type="text" name="state" />
        <textarea name="address" />
        <textarea name="additionalAddress" />
        <input type="text" name="existence" />
        <textarea name="founder" />
        <textarea name="bankruptcies" />
        <input type="text" name="financial" />
        <input type="file" id="file" name="license" />
        <input type="file" id="pending" name="pending" />
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
        encType="multipart/form-data"
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
        <p>
          If you have multiple campus locations, please provide the address for
          each campus.
        </p>
        <textarea
          onChange={handleChange}
          value={formState.additionalAddress}
          name="additionalAddress"
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
          may attend.
        </p>
        <input
          onChange={handleAttachment}
          name="license"
          id="license"
          type="file"
        />
        <p>
          If your application is pending, please provide proof that you are
          authorized to operate, along with the application submission date and
          expected approval date.
        </p>
        <input
          onChange={handleAttachment}
          name="pending"
          id="pending"
          type="file"
        />
        <button type="submit">Submit</button>
        <p>
          If you operate online, please provide relevant approval from
          regulatory agencies.
        </p>
        <input
          onChange={handleAttachment}
          name="online"
          id="online"
          type="file"
        />
        <p>
          If you are not required to obtain regulatory approval to operate,
          please explain and provide the basis for your exemption.
        </p>
        <textarea
          onChange={handleChange}
          value={formState.noreg}
          name="noreg"
        />
        <p>Please provide links to all websites and social media accounts.</p>
        <textarea
          onChange={handleChange}
          value={formState.socials}
          name="socials"
          required
        />
        <p>
          Approximately how many different employers have hired your graduates?
        </p>
        <input
          onChange={handleChange}
          value={formState.graduates}
          name="graduates"
          type="text"
          required
        />
        <p>How many employers have formal relationships with your school?</p>
        <input
          onChange={handleChange}
          value={formState.employerrelationships}
          name="employerrelationships"
          type="text"
          required
        />
        <p>
          Do you partner with any governmental or community organizations? If
          so, which ones?
        </p>
        <textarea
          onChange={handleChange}
          value={formState.partnerorgs}
          name="partnerorgs"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default IndexPage
