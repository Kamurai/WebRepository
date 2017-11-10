require 'test_helper'

class Division1ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get division1_Index_url
    assert_response :success
  end

end
