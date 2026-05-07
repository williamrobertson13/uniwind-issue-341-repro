import { Pressable, Text, View } from 'react-native';

import { copy858 } from '../generated/copy/copy858';
import { layout858 } from '../generated/layouts/layout858';
import { palette858 } from '../generated/palettes/palette858';

export function Screen858() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout858.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy858.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy858.detail} / {palette858.name}
			</Text>
		</View>
	);
}
