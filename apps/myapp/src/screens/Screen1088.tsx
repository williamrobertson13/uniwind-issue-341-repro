import { Pressable, Text, View } from 'react-native';

import { copy1088 } from '../generated/copy/copy1088';
import { layout1088 } from '../generated/layouts/layout1088';
import { palette1088 } from '../generated/palettes/palette1088';

export function Screen1088() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1088.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1088.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1088.detail} / {palette1088.name}
			</Text>
		</View>
	);
}
