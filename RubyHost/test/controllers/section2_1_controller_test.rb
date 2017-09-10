require 'test_helper'

class Section21ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_1_index_url
    assert_response :success
  end

end
