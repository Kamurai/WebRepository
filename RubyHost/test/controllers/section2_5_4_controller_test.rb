require 'test_helper'

class Section254ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_5_4_index_url
    assert_response :success
  end

end
