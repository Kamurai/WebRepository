require 'test_helper'

class Section3ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section3_index_url
    assert_response :success
  end

end
