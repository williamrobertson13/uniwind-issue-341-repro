import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy494 } from '../generated/copy/copy494';
import { layout494 } from '../generated/layouts/layout494';
import { palette494 } from '../generated/palettes/palette494';

const RuntimeView494 = withUniwind(View);

export function Screen494() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView494 styleClassName={layout494.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy494.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy494.detail} / {palette494.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
