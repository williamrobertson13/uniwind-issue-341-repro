import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy582 } from '../generated/copy/copy582';
import { layout582 } from '../generated/layouts/layout582';
import { palette582 } from '../generated/palettes/palette582';

const RuntimeView582 = withUniwind(View);

export function Screen582() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView582 styleClassName={layout582.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy582.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy582.detail} / {palette582.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
