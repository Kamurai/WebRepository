require 'test_helper'

class Section16ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section1_6_index_url
    assert_response :success
  end

end
