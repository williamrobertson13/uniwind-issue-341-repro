import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy926 } from '../generated/copy/copy926';
import { layout926 } from '../generated/layouts/layout926';
import { palette926 } from '../generated/palettes/palette926';

const RuntimeView926 = withUniwind(View);

export function Screen926() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView926 styleClassName={layout926.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy926.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy926.detail} / {palette926.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
