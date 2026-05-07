import { Pressable, Text, View } from 'react-native';

import { copy898 } from '../generated/copy/copy898';
import { layout898 } from '../generated/layouts/layout898';
import { palette898 } from '../generated/palettes/palette898';

export function Screen898() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout898.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy898.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy898.detail} / {palette898.name}
			</Text>
		</View>
	);
}
