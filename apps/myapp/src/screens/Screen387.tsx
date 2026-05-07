import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy387 } from '../generated/copy/copy387';
import { layout387 } from '../generated/layouts/layout387';
import { palette387 } from '../generated/palettes/palette387';

const RuntimeView387 = withUniwind(View);

export function Screen387() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView387 styleClassName={layout387.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy387.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy387.detail} / {palette387.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
