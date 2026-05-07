import { Pressable, Text, View } from 'react-native';

import { copy53 } from '../generated/copy/copy53';
import { layout53 } from '../generated/layouts/layout53';
import { palette53 } from '../generated/palettes/palette53';

export function Screen53() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout53.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy53.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy53.detail} / {palette53.name}
			</Text>
		</View>
	);
}
