import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy902 } from '../generated/copy/copy902';
import { layout902 } from '../generated/layouts/layout902';
import { palette902 } from '../generated/palettes/palette902';

const RuntimeView902 = withUniwind(View);

export function Screen902() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView902 styleClassName={layout902.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy902.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy902.detail} / {palette902.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
