import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy198 } from '../generated/copy/copy198';
import { layout198 } from '../generated/layouts/layout198';
import { palette198 } from '../generated/palettes/palette198';

const RuntimeView198 = withUniwind(View);

export function Screen198() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView198 styleClassName={layout198.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy198.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy198.detail} / {palette198.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
