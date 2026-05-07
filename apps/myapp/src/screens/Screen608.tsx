import { Pressable, Text, View } from 'react-native';

import { copy608 } from '../generated/copy/copy608';
import { layout608 } from '../generated/layouts/layout608';
import { palette608 } from '../generated/palettes/palette608';

export function Screen608() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout608.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy608.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy608.detail} / {palette608.name}
			</Text>
		</View>
	);
}
