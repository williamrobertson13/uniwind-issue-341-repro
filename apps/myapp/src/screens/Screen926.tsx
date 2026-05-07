import { Pressable, Text, View } from 'react-native';

import { copy926 } from '../generated/copy/copy926';
import { layout926 } from '../generated/layouts/layout926';
import { palette926 } from '../generated/palettes/palette926';

export function Screen926() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout926.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy926.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy926.detail} / {palette926.name}
			</Text>
		</View>
	);
}
