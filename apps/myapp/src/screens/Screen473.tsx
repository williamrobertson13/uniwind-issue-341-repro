import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy473 } from '../generated/copy/copy473';
import { layout473 } from '../generated/layouts/layout473';
import { palette473 } from '../generated/palettes/palette473';

const RuntimeView473 = withUniwind(View);

export function Screen473() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView473 styleClassName={layout473.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy473.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy473.detail} / {palette473.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
