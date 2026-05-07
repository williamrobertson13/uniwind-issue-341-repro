import { Pressable, Text, View } from 'react-native';

import { copy186 } from '../generated/copy/copy186';
import { layout186 } from '../generated/layouts/layout186';
import { palette186 } from '../generated/palettes/palette186';

export function Screen186() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout186.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy186.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy186.detail} / {palette186.name}
			</Text>
		</View>
	);
}
