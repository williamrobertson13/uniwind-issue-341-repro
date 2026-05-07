import { Pressable, Text, View } from 'react-native';

import { copy654 } from '../generated/copy/copy654';
import { layout654 } from '../generated/layouts/layout654';
import { palette654 } from '../generated/palettes/palette654';

export function Screen654() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout654.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy654.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy654.detail} / {palette654.name}
			</Text>
		</View>
	);
}
