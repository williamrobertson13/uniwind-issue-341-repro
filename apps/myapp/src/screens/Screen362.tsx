import { Pressable, Text, View } from 'react-native';

import { copy362 } from '../generated/copy/copy362';
import { layout362 } from '../generated/layouts/layout362';
import { palette362 } from '../generated/palettes/palette362';

export function Screen362() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout362.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy362.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy362.detail} / {palette362.name}
			</Text>
		</View>
	);
}
