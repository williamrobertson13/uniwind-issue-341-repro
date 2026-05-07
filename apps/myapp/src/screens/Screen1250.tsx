import { Pressable, Text, View } from 'react-native';

import { copy1250 } from '../generated/copy/copy1250';
import { layout1250 } from '../generated/layouts/layout1250';
import { palette1250 } from '../generated/palettes/palette1250';

export function Screen1250() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1250.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1250.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1250.detail} / {palette1250.name}
			</Text>
		</View>
	);
}
