export default function Forms() {
  return (
    <form className='space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        <div className='space-y-6 sm:space-y-5'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>Profile</h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>This information will be displayed publicly so be careful what you share.</p>
          </div>

          <div className='space-y-6 sm:space-y-5'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Username
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex max-w-lg rounded-md shadow-sm'>
                  <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm'>
                    workcation.com/
                  </span>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    autoComplete='username'
                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                About
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
                <p className='mt-2 text-sm text-gray-500'>Write a few sentences about yourself.</p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Cover photo
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                  <div className='space-y-1 text-center'>
                    <svg className='mx-auto h-12 w-12 text-gray-400' stroke='currentColor' fill='none' viewBox='0 0 48 48' aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span>Upload a file</span>
                        <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>Personal Information</h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>Use a permanent address where you can receive mail.</p>
          </div>
          <div className='space-y-6 sm:space-y-5'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                First name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Last name
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Email address
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='country' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Country
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <select
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='street-address' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                Street address
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='city' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                City
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  autoComplete='address-level2'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='region' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                State / Province
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
              <label htmlFor='postal-code' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
                ZIP / Postal code
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-gray-900'>Notifications</h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              We&apos;ll always let you know about important changes, but you pick what else you want to hear about.
            </p>
          </div>
          <div className='space-y-6 divide-y divide-gray-200 sm:space-y-5'>
            <div className='pt-6 sm:pt-5'>
              <div role='group' aria-labelledby='label-email'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                  <div>
                    <div className='text-sm font-semibold leading-6 text-gray-900' id='label-email'>
                      By Email
                    </div>
                  </div>
                  <div className='mt-4 sm:col-span-2 sm:mt-0'>
                    <div className='max-w-lg space-y-4'>
                      <div className='relative flex items-start'>
                        <div className='flex h-6 items-center'>
                          <input
                            id='comments'
                            name='comments'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                        <div className='ml-3 text-sm leading-6'>
                          <label htmlFor='comments' className='font-medium text-gray-900'>
                            Comments
                          </label>
                          <p className='text-gray-500'>Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className='relative flex items-start'>
                        <div className='flex h-6 items-center'>
                          <input
                            id='candidates'
                            name='candidates'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                        <div className='ml-3 text-sm leading-6'>
                          <label htmlFor='candidates' className='font-medium text-gray-900'>
                            Candidates
                          </label>
                          <p className='text-gray-500'>Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className='relative flex items-start'>
                        <div className='flex h-6 items-center'>
                          <input
                            id='offers'
                            name='offers'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                        <div className='ml-3 text-sm leading-6'>
                          <label htmlFor='offers' className='font-medium text-gray-900'>
                            Offers
                          </label>
                          <p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-6 sm:pt-5'>
              <div role='group' aria-labelledby='label-notifications'>
                <div className='sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4'>
                  <div>
                    <div className='text-sm font-semibold leading-6 text-gray-900' id='label-notifications'>
                      Push Notifications
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='max-w-lg'>
                      <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='push-everything'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                          <label htmlFor='push-everything' className='ml-3 block text-sm font-medium leading-6 text-gray-900'>
                            Everything
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='push-email'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                          <label htmlFor='push-email' className='ml-3 block text-sm font-medium leading-6 text-gray-900'>
                            Same as email
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='push-nothing'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                          <label htmlFor='push-nothing' className='ml-3 block text-sm font-medium leading-6 text-gray-900'>
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end gap-x-3'>
          <button
            type='button'
            className='rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
