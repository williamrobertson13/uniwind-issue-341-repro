import { Pressable, Text, View } from 'react-native';

import { copy917 } from '../generated/copy/copy917';
import { layout917 } from '../generated/layouts/layout917';
import { palette917 } from '../generated/palettes/palette917';

export function Screen917() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout917.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy917.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy917.detail} / {palette917.name}
			</Text>
		</View>
	);
}
