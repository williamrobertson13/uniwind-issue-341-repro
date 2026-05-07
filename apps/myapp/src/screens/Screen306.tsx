import { Pressable, Text, View } from 'react-native';

import { copy306 } from '../generated/copy/copy306';
import { layout306 } from '../generated/layouts/layout306';
import { palette306 } from '../generated/palettes/palette306';

export function Screen306() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout306.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy306.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy306.detail} / {palette306.name}
			</Text>
		</View>
	);
}
