import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main-footer noto-sans'>
        <h3>Questions? Call : 1-844-505-2993</h3>
        <table>
            <tr>
                <td>FAQ</td>
                <td>Help Center</td>
                <td>Account</td>
                <td>Media Control</td>
            </tr>
            <tr>
                <td>Investor Relations</td>
                <td>Jobs</td>
                <td>Redeem Gift Cards</td>
                <td>Buy Gift Cards</td>
            </tr>
            <tr>
                <td>Ways to Watch</td>
                <td>Terms Of Use</td>
                <td>Privacy</td>
                <td>Cookie Preference</td>
            </tr>
            <tr>
                <td>Corporate Information</td>
                <td>Contact Us</td>
                <td>Speed Test</td>
                <td>Legal Notices</td>
            </tr>
        </table>
    </div>
  )
}

export default Footer