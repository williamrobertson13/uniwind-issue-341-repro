import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy823 } from '../generated/copy/copy823';
import { layout823 } from '../generated/layouts/layout823';
import { palette823 } from '../generated/palettes/palette823';

const RuntimeView823 = withUniwind(View);

export function Screen823() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView823 styleClassName={layout823.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy823.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy823.detail} / {palette823.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
