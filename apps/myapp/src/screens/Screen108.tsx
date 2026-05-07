import { Pressable, Text, View } from 'react-native';

import { copy108 } from '../generated/copy/copy108';
import { layout108 } from '../generated/layouts/layout108';
import { palette108 } from '../generated/palettes/palette108';

export function Screen108() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout108.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy108.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy108.detail} / {palette108.name}
			</Text>
		</View>
	);
}
