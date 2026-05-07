import { Pressable, Text, View } from 'react-native';

import { copy566 } from '../generated/copy/copy566';
import { layout566 } from '../generated/layouts/layout566';
import { palette566 } from '../generated/palettes/palette566';

export function Screen566() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout566.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy566.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy566.detail} / {palette566.name}
			</Text>
		</View>
	);
}
