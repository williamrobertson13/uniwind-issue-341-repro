import { Pressable, Text, View } from 'react-native';

import { copy202 } from '../generated/copy/copy202';
import { layout202 } from '../generated/layouts/layout202';
import { palette202 } from '../generated/palettes/palette202';

export function Screen202() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout202.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy202.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy202.detail} / {palette202.name}
			</Text>
		</View>
	);
}
