import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBell } from '@coreui/icons';

const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}></CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              CoreUI includes a bunch of predefined buttons components, each
              serving its own semantic purpose. Buttons show what action will
              happen when the user clicks or touches it. CoreUI buttons are used
              to initialize operations, both in the background or foreground of
              an experience.
            </p>

            <CButton color='danger' key={1}>
              ahihi
            </CButton>
            <CButton color='link'>Link</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>with icons</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              You can combine button with our{' '}
              <a href='https://icons.coreui.io/'>CoreUI Icons</a>.
            </p>

            <CButton color='purple' key='2'>
              <CIcon icon={cilBell} className='me-2' />
            </CButton>
            <CButton color='link'>
              <CIcon icon={cilBell} className='me-2' />
              Link
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Button components</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              The <code>&lt;CButton&gt;</code> component are designed for{' '}
              <code>&lt;button&gt;</code> , <code>&lt;a&gt;</code> or{' '}
              <code>&lt;input&gt;</code> elements (though some browsers may
              apply a slightly different rendering).
            </p>
            <p className='text-medium-emphasis small'>
              If you&#39;re using <code>&lt;CButton&gt;</code> component as{' '}
              <code>&lt;a&gt;</code> elements that are used to trigger
              functionality ex. collapsing content, these links should be given
              a <code>role=&#34;button&#34;</code> to adequately communicate
              their meaning to assistive technologies such as screen readers.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>outline</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              If you need a button, but without the strong background colors.
              Set <code>variant=&#34;outline&#34;</code> prop to remove all
              background colors.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>ghost</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              If you need a ghost variant of button, set{' '}
              <code>variant=&#34;ghost&#34;</code> prop to remove all background
              colors.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              Larger or smaller buttons? Add <code>size=&#34;lg&#34;</code> or{' '}
              <code>size=&#34;sm&#34;</code> for additional sizes.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Pill</small>
          </CCardHeader>
          <CCardBody></CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Square</small>
          </CCardHeader>
          <CCardBody></CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Disabled state</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              Add the <code>disabled</code> boolean prop to any{' '}
              <code>&lt;CButton&gt;</code> component to make buttons look
              inactive. Disabled button has <code>pointer-events: none</code>{' '}
              applied to, disabling hover and active states from triggering.
            </p>

            <p className='text-medium-emphasis small'>
              Disabled buttons using the <code>&lt;a&gt;</code> component act a
              little different:
            </p>
            <p className='text-medium-emphasis small'>
              <code>&lt;a&gt;</code>s don&#39;tsupport the <code>disabled</code>{' '}
              attribute, so CoreUI has to add <code>.disabled</code> className
              to make buttons look inactive. CoreUI also has to add to the
              disabled button component{' '}
              <code>aria-disabled=&#34;true&#34;</code> attribute to show the
              state of the component to assistive technologies.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>React Button</strong> <small>Block buttons</small>
          </CCardHeader>
          <CCardBody>
            <p className='text-medium-emphasis small'>
              Create buttons that span the full width of a parent—by using
              utilities.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Buttons;
