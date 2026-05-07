import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy729 } from '../generated/copy/copy729';
import { layout729 } from '../generated/layouts/layout729';
import { palette729 } from '../generated/palettes/palette729';

const RuntimeView729 = withUniwind(View);

export function Screen729() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView729 styleClassName={layout729.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy729.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy729.detail} / {palette729.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
