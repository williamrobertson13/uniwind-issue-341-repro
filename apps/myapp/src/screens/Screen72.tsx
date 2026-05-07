import { Pressable, Text, View } from 'react-native';

import { copy72 } from '../generated/copy/copy72';
import { layout72 } from '../generated/layouts/layout72';
import { palette72 } from '../generated/palettes/palette72';

export function Screen72() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout72.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy72.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy72.detail} / {palette72.name}
			</Text>
		</View>
	);
}
