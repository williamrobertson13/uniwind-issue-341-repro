import { Pressable, Text, View } from 'react-native';

import { copy63 } from '../generated/copy/copy63';
import { layout63 } from '../generated/layouts/layout63';
import { palette63 } from '../generated/palettes/palette63';

export function Screen63() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout63.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy63.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy63.detail} / {palette63.name}
			</Text>
		</View>
	);
}
