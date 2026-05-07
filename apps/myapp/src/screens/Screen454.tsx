import { Pressable, Text, View } from 'react-native';

import { copy454 } from '../generated/copy/copy454';
import { layout454 } from '../generated/layouts/layout454';
import { palette454 } from '../generated/palettes/palette454';

export function Screen454() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout454.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy454.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy454.detail} / {palette454.name}
			</Text>
		</View>
	);
}
