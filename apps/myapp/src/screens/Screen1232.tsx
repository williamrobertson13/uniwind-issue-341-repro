import { Pressable, Text, View } from 'react-native';

import { copy1232 } from '../generated/copy/copy1232';
import { layout1232 } from '../generated/layouts/layout1232';
import { palette1232 } from '../generated/palettes/palette1232';

export function Screen1232() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1232.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1232.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1232.detail} / {palette1232.name}
			</Text>
		</View>
	);
}
